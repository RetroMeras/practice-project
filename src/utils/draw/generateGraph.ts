import { IEntity } from "../../types/IEntity";
import { IRelation } from "../../types/IRelation";

export const generateGraph = (entities: IEntity[], relations: IRelation[]) => {
  // Матрица смежности (https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0_%D1%81%D0%BC%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8)
  // Отсортируй сущности по id

  // в ячейке i, j матрицы M находится [0, ['', '']] в случае когда i, j не связаны
  // в противном случае:
  // если существуют связи в обе стороны, то [2, [id1, id2]], где id1 - id связи из i в j; id2 - id связи из j в i,
  // если существует только связь из i в j, то [1, [id1, '']],
  // наконец если существует связь только из j в i, то [-1, ['', id2]]

  // возвращай из функции массив из двух элементов
  // первый: отсортированные по id сущности
  // второй: полученная матрица
  return true
}