import * as Select from '@radix-ui/react-select'
import { CaretDown, Check } from 'phosphor-react'
import { useEffect, useState } from 'react'


interface Props {
  id: string,
  title: string
}

export function SelectGame() {

  const [games, setGames] = useState<Props[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return(
    <Select.Root>
    <Select.Trigger className="flex justify-between items-center bg-zinc-900 py-3 px-4 rounded text-sm" >
      <Select.Value placeholder="Selecione o game que deseja jogar..." />
      <Select.Icon>
        <CaretDown size={24} fontWeight="bold"/>
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content >
        <Select.Viewport className='bg-zinc-900 p-5 rounded overflow-hidden'>
          {
            games.map(game => {
              return(
                <Select.Item value={game.id} key={game.id} className="flex p-2 rounded gap-2 text-white text-sm mb-4 cursor-pointer hover:bg-zinc-700 ">
                  <Select.ItemText>
                    {game.title}
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <Check className="w-4 h-4 text-violet-500 hover:text-white" />
                  </Select.ItemIndicator>
                </Select.Item>
              )
            })
          }

        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
  )
}