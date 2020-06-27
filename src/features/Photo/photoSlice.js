import {createSlice} from "@reduxjs/toolkit";

const initialPhotos = [
  {
    id: "b33cdb4f-06c6-4375-aa5b-6a9010adad2d",
    categoryId: 5,
    photo: 'https://picsum.photos/id/532/300/300',
    title: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.'
  },
  {
    id: "97be1fd6-6d10-48a4-b6a3-b0faa69fb03e",
    categoryId: 1,
    photo: 'https://picsum.photos/id/43/300/300',
    title: 'Ad officia magna veniam sunt.'
  },
  {
    id: "bc78314d-1346-4856-83a8-554727f60fb0",
    categoryId: 3,
    photo: 'https://picsum.photos/id/722/300/300',
    title: 'Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.'
  },
  {
    id: "387fca07-6e1f-4a22-8c10-d705eda53e7f",
    categoryId: 5,
    photo: 'https://picsum.photos/id/294/300/300',
    title: 'Deserunt in tempor est id consectetur cupidatat.'
  },
  {
    id: "9d8ab488-67b1-4f9a-a0a0-252cade5f3bb",
    categoryId: 4,
    photo: 'https://picsum.photos/id/229/300/300',
    title: 'Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.'
  },
  {
    id: "3f82cfa6-6856-48f3-950f-4f9f40edc4dd",
    categoryId: 1,
    photo: 'https://picsum.photos/id/862/300/300',
    title: 'Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.'
  },
  {
    id: "a5459f17-8d2c-4084-9e41-38e73a099d85",
    categoryId: 3,
    photo: 'https://picsum.photos/id/515/300/300',
    title: 'Excepteur nisi aliquip ex aliqua consectetur id laboris cillum elit dolor dolor anim sint.'
  },
  {
    id: "f162cce4-8bd2-4710-bb42-2da62f60d0e9",
    categoryId: 5,
    photo: 'https://picsum.photos/id/730/300/300',
    title: 'Occaecat exercitation Lorem cupidatat adipisicing elit duis consequat esse et tempor eu enim cupidatat.'
  },
  {
    id: "065eced1-9b7e-4c73-834d-31360efdb201",
    categoryId: 3,
    photo: 'https://picsum.photos/id/287/300/300',
    title: 'Veniam officia est nulla proident labore.'
  },
  {
    id: "d38c3ecb-478c-48b9-8e29-805577242258",
    categoryId: 3,
    photo: 'https://picsum.photos/id/859/300/300',
    title: 'Ut incididunt do magna culpa consectetur id deserunt et enim elit quis.'
  },
  {
    id: "3c1e6605-b950-4256-bd65-d836b0b1c8a6",
    categoryId: 5,
    photo: 'https://picsum.photos/id/110/300/300',
    title: 'Nisi velit fugiat voluptate fugiat magna officia qui fugiat ad non.'
  },
  {
    id: "6105636f-3e2e-429d-ba90-eaf3e90bd629",
    categoryId: 5,
    photo: 'https://picsum.photos/id/649/300/300',
    title: 'Id ex enim non dolore reprehenderit eu ullamco.'
  },
];

const photo = createSlice({
  name: 'photos',
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    editPhoto: (state, action) => {
      const newPhotoIndex = state.findIndex(photo => photo.id === action.payload.id);
      if (newPhotoIndex > -1) {
        state[newPhotoIndex] = action.payload;
      }
    },
    removePhoto: (state, action) => {
      return state.filter(photo => photo.id !== action.payload);
    }
  }
});

const {reducer, actions} = photo;
export const {addPhoto, editPhoto, removePhoto} = actions;
export default reducer;
