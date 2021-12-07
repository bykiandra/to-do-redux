type Todo = {
  id: number, // date
  text: string,
  category: typeof Category,
  isComplete: boolean
}

type Category = {
  name: string
  color: string
}

type HandleChange = (text: ChangeEvent) => void
type HandleSubmit = () => void