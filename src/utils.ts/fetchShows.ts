import { Show } from "../app/shows/shows";
import Papa from "papaparse";

export const fetchShows = async (): Promise<Show[]> => {
  try {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcnjsq9ckno-2onPEQsqqc86DtkWEwI8dP3rKk50SkWgg6jJVJ9F-YeeX8WvP5buBt0pre4zLXqcYw/pub?gid=0&single=true&output=csv",
      {
        cache: "no-store",
        next: {
          revalidate: 0,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const { data } = Papa.parse(text, { header: true });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const shows: Show[] = data.map((row: any) => ({
      month: row.month,
      day: row.day,
      time: row.time,
      venue: row.venue,
      location: row.location,
      tickets: row.tickets || "",
    }));
    return shows;
  } catch (error) {
    console.error("Error fetching shows:", error);
    throw error;
  }
};
