export interface Task {
  id?: number | undefined //undefined because I don't want to manage multiple dtos
  title: string
  priority: number | undefined
}
