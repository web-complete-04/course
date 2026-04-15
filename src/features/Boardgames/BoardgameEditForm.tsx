import { Fragment, useEffect, useState } from "react";
import * as z from "zod/v4";
import { useZodValidation } from "../../hooks/useZodValidation";
import { Api } from "../../utils/api";
import type { Boardgame } from "./types";
import { useAuth } from "../Auth/context/useAuth";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const validationSchema = z.object({
  name: z.string().nonempty(),
  thumbnail: z.url().nonempty(),
  image: z.url().nonempty(),
  numberOfPlayers: z.object({
    min: z.coerce.number().positive(),
    max: z.coerce.number().positive(),
    recommended: z.coerce.number().positive(),
    best: z.coerce.number().positive(),
  }),
  alternateNames: z.array(z.string().optional()),
});

const boardgameApi = new Api('boardgames');

export function BoardgameEditForm() {
  const [formValues, setFormValues] = useState({
    id: 0,
    name: "",
    thumbnail: "",
    image: "",
    numberOfPlayers: {
      min: 0,
      max: 0,
      recommended: 0,
      best: 0,
    },
    alternateNames: [""],
  });

  const {user, accessToken} = useAuth();
  const { id } = useParams();

  useEffect(() => {
      if (!id) return;
  
      void boardgameApi.readOne<Boardgame>(id).then(setFormValues);
    }, [id]);
  

  if(accessToken) {
    boardgameApi.setAsAuthRequired(accessToken);
  }

  const { errors, isValid } = useZodValidation(validationSchema);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if(!user?.id) return;

    if (!isValid(formValues)) return;
    const send2Server: Partial<Boardgame> = {...formValues}  ;

    send2Server.alternateNames = formValues.alternateNames.filter(Boolean);
    send2Server.userId = user.id;

    const data = await boardgameApi.update<Boardgame>(formValues.id, send2Server);
    toast.success(`"${data.name}" has been successfully added!`);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name;
    const newValues = { ...formValues };


    type InputObject = z.infer<typeof validationSchema>;
    type InputNamesWithoutNoPlayers = keyof Omit<
      InputObject,
      "numberOfPlayers" | "alternateNames"
    >;
    if (!inputName.includes(".")) {
      newValues[e.target.name as InputNamesWithoutNoPlayers] = e.target.value;
    } else {
      const [input, subInput] = e.target.name.split(".");

      const inputObject = newValues[input as keyof InputObject];
      if (typeof inputObject === "object" && !Array.isArray(inputObject)) {
        inputObject[subInput as keyof typeof inputObject] = Number(
          e.target.value,
        );
      }
    }

    if (errors) {
      isValid(newValues);
    }

    setFormValues(newValues);
  }

  function handleArrayInputChange(
    i: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    const alternateNames = [...formValues.alternateNames];
    alternateNames[i] = e.target.value;
    setFormValues({ ...formValues, alternateNames });
  }

  function handleAddAlternateNameField() {
    const alternateNames = [...formValues.alternateNames];
    alternateNames.push("");
    setFormValues({ ...formValues, alternateNames });
  }

  if(!formValues.name) {
    return <strong>Loading ...</strong>
  }

  return (
    <form className="brandForm" noValidate onSubmit={handleSubmit}>
      <h1>Edit "{formValues.name}"</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      {errors?.name && <p className="errorMessage">{errors.name}</p>}

      <fieldset>
        <legend>Alternate Names</legend>

        {formValues.alternateNames.map((an, i) => (
          <Fragment key={i}>
            <label htmlFor={`alternateNames${String(i)}`}>
              Alternate Name {i + 1}
            </label>
            <input
              type="text"
              id={`alternateNames${String(i)}`}
              name="alternateNames"
              value={an}
              onChange={(e) => {
                handleArrayInputChange(i, e);
              }}
            />
            {errors?.alternateNames && (
              <p className="errorMessage">{errors.alternateNames}</p>
            )}
          </Fragment>
        ))}

        <button type="button" onClick={handleAddAlternateNameField}>
          Add an Alternate Name
        </button>
      </fieldset>

      <label htmlFor="thumbnail">Thumbnail</label>
      <input
        type="url"
        id="thumbnail"
        name="thumbnail"
        value={formValues.thumbnail}
        onChange={handleInputChange}
      />
      {errors?.thumbnail && <p className="errorMessage">{errors.thumbnail}</p>}

      <label htmlFor="image">Image</label>
      <input
        type="url"
        id="image"
        name="image"
        value={formValues.image}
        onChange={handleInputChange}
      />
      {errors?.image && <p className="errorMessage">{errors.image}</p>}

      <fieldset>
        <legend>Number of Players</legend>
        {errors?.numberOfPlayers && (
          <p className="errorMessage">{errors.numberOfPlayers}</p>
        )}

        <label htmlFor="min">Min</label>
        <input
          type="number"
          id="min"
          name="numberOfPlayers.min"
          value={formValues.numberOfPlayers.min}
          onChange={handleInputChange}
        />

        <label htmlFor="max">Max</label>
        <input
          type="number"
          id="max"
          name="numberOfPlayers.max"
          value={formValues.numberOfPlayers.max}
          onChange={handleInputChange}
        />

        <label htmlFor="best">Best</label>
        <input
          type="number"
          id="best"
          name="numberOfPlayers.best"
          value={formValues.numberOfPlayers.best}
          onChange={handleInputChange}
        />

        <label htmlFor="recommended">Recommended</label>
        <input
          type="number"
          id="recommended"
          name="numberOfPlayers.recommended"
          value={formValues.numberOfPlayers.recommended}
          onChange={handleInputChange}
        />
      </fieldset>

      <button type="submit">Save Modifications</button>
    </form>
  );
}
