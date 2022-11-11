import  Axios  from 'axios'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import { Loader } from 'semantic-ui-react'
import Item from '../../src/component/Item'

const Post = ({item}) => {
  return<> {item && <Item item={item}/>}</>
}

export default Post

export async function getServerSideProps(context){
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  const res = await Axios.get(apiUrl)
  const data = res.data;

  return{
    props:{
      item:data
    }
  }
}