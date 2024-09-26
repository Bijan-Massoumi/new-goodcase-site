import { Show } from "../app/shows/shows";
import Papa from "papaparse";

export const fetchShows = async (): Promise<Show[]> => {
  try {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/1Ng4Rb2fhZETYA5BYg2Pjr5Zqc2FgGonxP7tvHJKz5aA/pub?output=csv"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const { data } = Papa.parse(text, { header: true });
    console.log(data);
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
