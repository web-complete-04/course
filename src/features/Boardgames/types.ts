export type Boardgame = {
  id:              number;
  bggId:           number;
  userId:          number;
  name:            string;
  thumbnail:       string;
  image:           string;
  alternateNames:  string[];
  description:     string;
  numberOfPlayers: NumberOfPlayers;
  playtime:        Playtime;
  minAge:          number;
  yearpublished:   number;
  rank:            number;
  bayesaverage:    number;
  average:         number;
  usersrated:      number;
  otherRanks:      OtherRanks;
}

export type NumberOfPlayers = {
  min:         number;
  max:         number;
  recommended: number;
  best:        number;
}

export type OtherRanks = {
  strategygames: number;
}

export type Playtime = {
  avg: number;
  min: number;
  max: number;
}
