import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Appointments } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';


import { styles } from './styles';

export function Home() {
  const[category, setCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'Hoje vamos ganhar todas as partidas da MD10!'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'Hoje vamos ganhar todas as partidas da MD10!'
    }
  ]

  return( 
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleSelectCategory}
        />
        
        <View style={styles.content}>
          <ListHeader 
            title='Partidas Agendadas'
            subtitle='Total 6'
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointments data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matchs}
            showsVerticalScrollIndicator={false}
          />
        </View>
    </View>
  )
}