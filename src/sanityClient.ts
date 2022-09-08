import Client from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { Artikkel, Forside, Person } from "./types/sanity";

const client = Client({
  projectId: "07sn9sev",
  dataset: "production",
  apiVersion: "2021-03-25",
  //token: "sanity-auth-token",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export default client;

export function getAllPeople() {
  return client.fetch(`*[_type=="person"]`) as Promise<Person[]>;
}

export function getArtikkelBySlug(slug: string): Promise<Artikkel> {
  return client.fetch(
    `*[slug.current == '${slug}'][0]{'tekst': riktekst, ingress, overskrift, 'bilder': bilder[]{'bilde': bilde.asset->url, orientation}, 'facts': facts[]{text, url}}`
  );
}

export function getForside(): Promise<Forside[]> {
  return client.fetch(
    `*[_id == 'forsiden']{om, 'artikler': artikler[] -> {'forsidebilde': forsidebilde.asset->url, overskrift, 'slug': slug.current}, 'facts': facts[]{text, url}}`
  );
}
