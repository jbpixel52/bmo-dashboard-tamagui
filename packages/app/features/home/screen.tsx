import { Anchor, Button, CardProps, H1, Input, Paragraph, Separator, Sheet, XStack, YStack } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { Card, H2, Image } from 'tamagui' // or @tamagui/card

export function HomeScreen() {


  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">BMO Dashboard 🤖</H1>
        <Paragraph ta="center">
          pee pee poo poo
        </Paragraph>
      </YStack>
      <YStack space="$4" maw={600}>
        <Card>
          <Card.Header />
          <Card.Footer />
          <AppCard
            animation="bouncy"
            size="$4"
            w={250}
            h={300}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            _appname='Sonarr'
          />
          <Card.Background />
        </Card>

        <Card>
          <Card.Header />
          <Card.Footer />
          <AppCard
            animation="bouncy"
            size="$4"
            w={250}
            h={300}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            _appname='dashboard'
          />
          <Card.Background />
        </Card>

      </YStack>

    </YStack>
  )
}

interface appCardProps {
  props: CardProps,
  _appname: string
}

function AppCard(props: appCardProps) {
  return (
    <Card theme="dark" elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>{props._appname}</H2>
      </Card.Header>
      <Card.Footer padded>
        <XStack f={1} />
        <YStack f={1}>

        </YStack>
        <Button br="$10">
          <Anchor href={`https://${props._appname}.jbpixel.xyz`}>Open {props._appname}</Anchor>
        </Button>
      </Card.Footer>
      <Card.Background>

      </Card.Background>
    </Card>
  )
}
function SheetDemo() {
  const [ open, setOpen ] = useState(false)
  const [ position, setPosition ] = useState(0)
  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[ 80 ]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
