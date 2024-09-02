import { View, Text, FlatList, RefreshControl, Pressable, StyleSheet } from "react-native";
import { DUMMY_DATA } from "@/data/dummy";
// import EventItem from "./event-item";
import { Link, router } from "expo-router";
import { Event } from "@/types";


type EventListItemProps = {
    event: Event
}


const EventListItem = ({event}: EventListItemProps) => {
    return ( 
        <Link href={`/events/${event.id}`} asChild>
            <Pressable  style={styles.card}>
                <Text>{event.title}</Text>
                <Text>{event.description}</Text>
            </Pressable>
        </Link>
     );
}

const styles = StyleSheet.create({
card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    height: 80,
    // width: 240,
    // flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    padding: 10
    

}
})
 
export default EventListItem;