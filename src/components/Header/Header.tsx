import React from "react";
import { View, Text } from "@react-pdf/renderer";

import { Phone, Email, Website, GitHub, Code } from "../Icons";
import styles from "./Header.style";

interface Props {
  name: string;
  positions: string[];
  phone: string;
  email: string;
  website: string;
  github: string;
  code: string;
}

function formatPhone(number: string): string {
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}

const Header = ({
  name,
  positions,
  phone,
  email,
  website,
  github,
  code,
}: Props) => {
  const extras: Array<{ icon: React.ReactNode; text: string }> = [];

  if (phone) {
    extras.push({
      icon: <Phone />,
      text: formatPhone(phone),
    });
  }

  if (email) {
    extras.push({
      icon: <Email />,
      text: email,
    });
  }

  if (website) {
    extras.push({
      icon: <Website />,
      text: website,
    });
  }

  if (github) {
    extras.push({
      icon: <GitHub />,
      text: github,
    });
  }

  if (code) {
    extras.push({
      icon: <Code />,
      text: code,
    });
  }

  return (
    <View style={styles.header}>
      <Text style={styles.name}>
        {name.split(" ").map((word, index) => (
          <Text key={index} style={index === 0 ? styles.firstName : {}}>
            {word}
            {index < name.length - 1 && " "}
          </Text>
        ))}
      </Text>
      <View style={styles.positions}>
        {positions.map((position, index) => (
          <React.Fragment key={index}>
            {index > 0 && index < positions.length && <Text>·</Text>}
            <Text key={index}>{position}</Text>
          </React.Fragment>
        ))}
      </View>
      <View style={styles.extras}>
        {extras.map(({icon,text}, index) => (
          <React.Fragment key={index}>
            <View style={styles.entry}>
              {icon}
              <Text>{text}</Text>
            </View>
            {index < extras.length - 1 && <Text>|</Text>}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default Header;
