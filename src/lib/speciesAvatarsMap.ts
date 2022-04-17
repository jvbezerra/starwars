import { Props as AvatarProps } from 'avataaars'

const defaultProps: AvatarProps = {
  avatarStyle:'Circle',
  accessoriesType:'Blank',
  clotheType:'ShirtScoopNeck',
  clotheColor:'Blue01',
  eyeType:'Default',
  eyebrowType:'Default'
}

export const specieToAvatar: Record<string, AvatarProps> = {
  'Human male': {
    ...defaultProps,
    topType:'ShortHairShortFlat',
    hairColor:'BrownDark',
    facialHairType:'BeardLight',
    facialHairColor:'BrownDark',
    mouthType:'Serious',
    skinColor:'Light',
  },
  'Human female': {
    ...defaultProps,
    topType:'LongHairBigHair',
    hairColor:'BrownDark',
    facialHairType:'Blank',
    facialHairColor:'BrownDark',
    mouthType:'Serious',
    skinColor:'Light',
  },
  'Droid': {
    ...defaultProps,
    topType:'NoHair',
    facialHairType:'Blank',
    mouthType:'Serious',
    skinColor:'Pale'
  },
  'Wookie': {
    ...defaultProps,
    topType:'LongHairBigHair',
    hairColor:'BrownDark',
    facialHairType:'BeardMajestic',
    facialHairColor:'BrownDark',
    eyeType:'Surprised',
    eyebrowType:'UnibrowNatural',
    mouthType:'ScreamOpen',
    skinColor:'Black',
  },
  'Rodian': {
    ...defaultProps,
    topType:'ShortHairTheCaesar',
    hairColor:'BlondeGolden',
    facialHairType:'MoustacheMagnum',
    facialHairColor:'BlondeGolden',
    eyebrowType:'UnibrowNatural',
    mouthType:'Tongue',
    skinColor:'Yellow',
  },
  'Hutt': {
    ...defaultProps,
    topType:'LongHairBigHair',
    hairColor:'BlondeGolden',
    facialHairType:'MoustacheMagnum',
    facialHairColor:'BlondeGolden',
    eyeType:'Surprised',
    eyebrowType:'UnibrowNatural',
    mouthType:'Tongue',
    skinColor:'Yellow',
  },
  "Yoda's species": {
    ...defaultProps,
    topType:'WinterHat4',
    // @ts-ignore
    hatColor:'PastelOrange',
    facialHairType:'Blank',
    eyebrowType:'FlatNatural',
    mouthType:'Serious',
    skinColor:'Yellow',
  },
  'Trandoshan': {
    ...defaultProps,
    topType:'WinterHat4',
    // @ts-ignore
    hatColor:'PastelOrange',
    facialHairType:'Blank',
    eyeType:'Surprised',
    eyebrowType:'UnibrowNatural',
    mouthType:'Grimace',
    skinColor:'Yellow',
  },
  'Mon Calamari': {
    ...defaultProps,
    topType:'ShortHairTheCaesar',
    hairColor:'Red',
    facialHairType:'MoustacheFancy',
    facialHairColor:'Red',
    clotheType:'ShirtScoopNeck',
    clotheColor:'Blue01',
    eyeType:'Surprised',
    mouthType:'Serious',
    skinColor:'Tanned',
  },
  'Ewok': {
    ...defaultProps,
    topType:'ShortHairTheCaesar',
    hairColor:'BrownDark',
    facialHairType:'BeardMajestic',
    facialHairColor:'BrownDark',
    eyeType:'Surprised',
    eyebrowType:'UnibrowNatural',
    mouthType:'ScreamOpen',
    skinColor:'Black',
  },
  'Sullustan': {
    ...defaultProps,
    topType:'NoHair',
    facialHairType:'Blank',
    clotheType:'ShirtScoopNeck',
    clotheColor:'Blue01',
    eyeType:'Surprised',
    eyebrowType:'UnibrowNatural',
    mouthType:'Disbelief',
    skinColor:'Pale',
  }
}