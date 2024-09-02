import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack() {
    return (
    <Stack screenOptions={{
        headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bars"
                    size={25}
                    color={"white"}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerStyle: {
            backgroundColor: '#0f172a', // Kolor tła nagłówka
          },
         
    }}>
        <Stack.Screen name="index" options={{title: "Profiles", headerTintColor: "white" }}/>
    </Stack>
    );
}