import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes"

export const addNumber = (number) => ({
  type: ADD_NUMBER,
  number: number
})

export const subNumber = (number) => ({
  type: SUB_NUMBER,
  number: number
})