import { View, Text } from 'react-native';


export default function Screen() {
    const is_loading = true;

    if (is_loading) {
        return <Text style={{ color: 'green', fontSize: 33 }}>loading...</Text>;
    }

    return (
        <View>
            {my_data['posts'].map((my_post, index: number) => {
                return <Text key={index}>{my_post.title}</Text>
            })}
        </View>
    );
};
