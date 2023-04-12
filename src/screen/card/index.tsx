import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";

type Props = {
  title?: string;
  text?: string;
  icon?: any;
};
const CreateCard = (props: Props) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>{props.title}</Title>
        <Entypo name={props.icon} size={WP(11.5)} style={styles.icon} />
      </Card.Content>
      <Card.Content>
        <Paragraph>{props.text}</Paragraph>
      </Card.Content>
    </Card>
  );
};
export default CreateCard;
