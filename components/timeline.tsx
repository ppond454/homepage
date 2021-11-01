import React from "react"
import { Container, VStack, Heading, Text } from "@chakra-ui/react"
import Detail from "./Detail.json"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab"

interface Props {}

const index = (props: Props) => {
  return (
    <Timeline>
      {Detail.detail.map((val, i) => {
        return (
          <TimelineItem key={i} >
            <TimelineOppositeContent >
              <Heading fontSize={{base:"sm" , md:"lg"}} color="#565656" >
              {val.years}
              </Heading>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Text fontSize={{base:"11" , md:"18"}} color="#565656">{val.enducation}</Text>
              <Text fontSize={{base:"8" , md:"14"}} color="red.200">{val.degree}</Text>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

export default index
