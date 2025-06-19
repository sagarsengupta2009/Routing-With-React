import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{eventData.message}</p>;
  // }
  const eventData = data.events;
  return <EventsList events={eventData} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: `Couldn't fetch events` };
    throw new Response(JSON.stringify({ message: `Couldn't fetch events` }), {
      status: 500,
    });
  } else {
    // const resData = await response.json();
    return response;
  }
}
