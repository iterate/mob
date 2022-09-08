export interface LocaleString {
  _type: "localeString";
  nb?: string;
  en?: string;
}

export interface Person {
  _type: "person";
  name: string;
  email: string;
  phone: string;
  title: LocaleString;
  image: Image;
}

export interface Image {
  _type: "image";
  asset: Reference;
  crop?: Crop;
  hotspot?: Hotspot;
}

export interface Reference {
  _ref: string;
  _type: "_reference";
}

interface Hotspot {
  height: number;
  width: number;
  x: number;
  y: number;
}

interface Crop {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export type Facts = Fact[];
export type Fact = { text: string; url: string };

export type OrientationImage = {
  orientation: string;
  bilde: string;
};

export type Artikkel = {
  tekst: any[];
  ingress: any[];
  overskrift: string;
  bilder: OrientationImage[];
  facts: Facts;
};

export type Forside = { om: any[]; artikler: ForsideArtikkel[]; facts: Facts };
export type ForsideArtikkel = {
  forsidebilde: string;
  overskrift: string;
  slug: string;
};
