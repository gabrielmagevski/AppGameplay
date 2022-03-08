import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

/* 
  {...rest} => pode ser qualquer nome (rest = resto)
o que ele faz? ele está sendo passado na propriedade
<TouachableOpacity /> para todos os botões que quiserem ter um
opacity. E o Dev pode adicionar apenas uma propriedade somente, 
sem ficar tendo que passar todas as propriedades definidas
na tipagem para os botões.
*/

export function ButtonIcon({ title, ...rest }: Props) {
  return(
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}