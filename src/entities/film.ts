import { Clovek } from "./clovek";
import { Postava } from "./postava";

export class Film {
  constructor(
    nazov: string,
    rok: number,
    id?: number,
    imdbID?: string,
    slovenskyNazov?: string,
    poradieVRebricku?: { [title: string]: number },
    reziser: Clovek[] = [],
    postava: Postava[] = []
  ) {}
}
