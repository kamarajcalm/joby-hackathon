import React from "react";
import {FlatList} from 'native-base'
import FeedCard from "./FeedCard";
const data = [
  {
    pic: "https://i.pinimg.com/564x/18/8b/da/188bda5d34b611b1964a78b9b50453f6.jpg",
    name:"Tele Caller",
    type:"(Work From Home)",
    company:"Orange tech",
    rating:4.5,
    Address:"Coimabtore, TamilNadu",
    date:"02-08-2022 4 days ago"
  },
  {
    pic: "https://i.pinimg.com/564x/18/8b/da/188bda5d34b611b1964a78b9b50453f6.jpg",
    name:"TeleCaller",
    type:"(Work From Home)",
    company:"Orange tech",
    rating:4.5,
    Address:"Coimabtore, TamilNadu",
    date:"02-08-2022 4 days ago"
  },
  {
    pic: "https://i.pinimg.com/564x/18/8b/da/188bda5d34b611b1964a78b9b50453f6.jpg",
    name:"TeleCaller",
    type:"(Work From Home)",
    company:"Orange tech",
    rating:4.5,
    Address:"Coimabtore, TamilNadu",
    date:"02-08-2022 4 days ago"
  },
  {
    pic: "https://i.pinimg.com/564x/18/8b/da/188bda5d34b611b1964a78b9b50453f6.jpg",
    name:"TeleCaller",
    type:"(Work From Home)",
    company:"Orange tech",
    rating:4.5,
    Address:"Coimabtore, TamilNadu",
    date:"02-08-2022 4 days ago"
  },
];
const Feeds = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return <FeedCard data={item} />;
      }}
    />
  );
}; 

export default Feeds;