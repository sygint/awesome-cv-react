import { View, Text, Svg, Line } from "@react-pdf/renderer";
import React from "react";

import styles from "./Section.style";

interface Props {
  sections: Section[];
}

function makeTitle(title: string) {
  return (
    <Text>
      <Text style={styles.highlight}>{title.slice(0, 3)}</Text>
      <Text>{title.slice(3)}</Text>
    </Text>
  );
}

const Sections = ({ sections }: Props) => {
  return (
    <>
      {sections.map(({ title, type, items }, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.sectionHeader}>
            {makeTitle(title)}
            <View style={styles.line} />
          </View>
          <View style={styles.sectionBody}>
            {type === "2-col"
              ? items.map(({ title, items }: SectionItem, index) => (
                  <View key={index} style={styles.entry}>
                    <Text style={styles.entryTitle}>{title}</Text>
                    <Text style={styles.entryItems}>{items.join(", ")}</Text>
                  </View>
                ))
              : items.map(
                  (
                    {
                      organization,
                      location,
                      position,
                      dates,
                      items,
                    }: SectionItem,
                    index
                  ) => (
                    <View key={index} style={styles.subSection}>
                      <View style={styles.entryHeader}>
                        <Text style={styles.organization}>{organization}</Text>
                        <Text style={styles.location}>{location}</Text>
                      </View>
                      <View style={styles.entryHeader}>
                        <Text style={styles.position}>{position}</Text>
                        <Text style={styles.dates}>{dates}</Text>
                      </View>
                      {items.map((item, index) => (
                        <View key={index} style={styles.entryItems2}>
                          <Text>•</Text>
                          <Text>{item}</Text>
                        </View>
                      ))}
                    </View>
                  )
                )}
          </View>
        </View>
      ))}
    </>
  );
};
export default Sections;
