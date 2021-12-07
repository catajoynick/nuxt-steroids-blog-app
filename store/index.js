import Cookie from 'js-cookie'
//state 
export const state  = () => ({
    loadedPost: [],
    token: null
})

//mutations
export const mutations = {
    setPosts(state, posts){
        state.loadedPost = posts
    },
    addPost(state, post){

        state.loadedPost.push(post )
    },
    editPost(state, edittedPost){

        const postIndex = state.loadedPost.findIndex(post => post.id == edittedPost.id);
        state.loadedPost[postIndex] = edittedPost;
    },
    setToken(state, token){
        state.token = token;
    },
    clearToken(state){
        state.token = null
    }
}
// actions 
export const actions = {

    nuxtServerInit(vuexContext, context){

        return this.$axios.$get("https://nuxt-blog-fd377-default-rtdb.firebaseio.com/posts.json")
                    .then(res =>{

                        const postArray = []
                        for(const key in res){
                            postArray.push({...res[key], id: key})
                        }
                        vuexContext.commit('setPosts', postArray)
                    })
                    .catch(e => console.log(e))
    },
    setPosts(context, posts){
        context.commit('setPosts', posts)
    },
    // Handling adding post
    addPost(context, postData){

        const createdPost = {
            ...postData,
            updatedDate: new Date()
        }
        return this.$axios.$post(`https://nuxt-blog-fd377-default-rtdb.firebaseio.com/posts.json?auth=${context.state.token}`, createdPost)
            .then((result) => {
                context.commit('addPost', {...createdPost, id: result.name})
            })
            .catch((error) => console.log(error))
    },
    editPost(context, editedPost){

       
        return this.$axios
        .$put(
          `https://nuxt-blog-fd377-default-rtdb.firebaseio.com/posts/${editedPost.id}.json?auth=${context.state.token}`,
          editedPost
        )
        .then((res) => {
            context.commit('editPost', editedPost)
        } )
        .catch((e) => console.log(e))
    },
    authenticateUser(vuexContext, credentials){
      
      if (credentials.isLogin) {
        const authURL =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYVM7hEVXPdqUE1jcwf4PVyy01V-vv9Kk'
      
           this.$axios
          .$post(authURL, credentials)
          .then((result) => {            
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
            Cookie.set("jwt", result.idToken)
            Cookie.set("expirationDate",new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
            return this
        })
          .catch((error) => console.log(error))
      } else {
        const authURL =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYVM7hEVXPdqUE1jcwf4PVyy01V-vv9Kk'
       
           this.$axios
          .$post(authURL, credentials)
          .then((result) =>{
            return this
          })
          .catch((err) => console.log(err))
      }
    },
    initAuth(vuexContext, req){

        let token;
        let expirationDate;
        if(req){
            if(!req.headers.cookie)return;
            const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
            if(!jwtCookie) return
            token = jwtCookie.split('=')[1];
            expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate')).split("=")[1];

        }else{
            token = localStorage.getItem('token')
            expirationDate = localStorage.getItem('tokenExpiration')
        }
        if(new Date().getTime() > +expirationDate || !token) {
            vuexContext.dispatch('logout')
            return;
        }
        vuexContext.commit('setToken', token)
    },
    logout(vuexContext){
        vuexContext.commit('clearToken');
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if(process.client){ 
            localStorage.removeItem('token')
            localStorage.removeItem('tokenExpiration') 
        }
    }
}
// getters
export const getters = {
    loadedPosts(state) {
        return state.loadedPost
    },
    isAuthenticated(state){
        return state.token != null
    }
}