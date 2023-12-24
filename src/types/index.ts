//定义一个接口，用来约束对象的具体属性

export interface Person {
  id: string;
  name: string;
  age: number;
}

export type Persons = Person[];
