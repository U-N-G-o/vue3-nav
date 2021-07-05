import { createStore } from 'vuex'

import { tools, docs, community } from '../constants/asideData'
import { allCards } from '../constants'

const frontEndTools = []
const officeTools = []
const vue = []
const react = []
const wechat = []
const across = []
const compiler = []
const blogs = []
allCards.map(item => {
  if (item.tag.includes("frontEndTools")) {
    frontEndTools.push(item)
  }
  if (item.tag.includes("officeTools")) {
    officeTools.push(item)
  }
  if (item.tag.includes("vue")) {
    vue.push(item)
  }
  if (item.tag.includes("react")) {
    react.push(item)
  }
  if (item.tag.includes("wechat")) {
    wechat.push(item)
  }
  if (item.tag.includes("across")) {
    across.push(item)
  }
  if (item.tag.includes("compiler")) {
    compiler.push(item)
  }
  if (item.tag.includes("blogs")) {
    blogs.push(item)
  }
})

const addCommon = (item) => {
  const myCommon = JSON.parse(localStorage.getItem('myCommon'))
  if (myCommon !== null) {
    myCommon.map((common, i) => {
      if (common.title === item.title) {
        myCommon.splice(i, 1)
      }
    })
    if (myCommon.length >= 8) {
      myCommon.length = 7
    }
    localStorage.setItem('myCommon',
      JSON.stringify([item, ...myCommon])
    )
  } else {
    localStorage.setItem('myCommon',
      JSON.stringify([item])
    )
  }
}

const delCommon = (item) => {
  const myCommon = JSON.parse(localStorage.getItem('myCommon'))
  myCommon.map((common, i) => {
    if (common.title === item) {
      myCommon.splice(i, 1)
    }
  })
  localStorage.setItem('myCommon',
    JSON.stringify(myCommon)
  )
}

const store = createStore({
  state: {
    asideData: [],
    mainData: [],
    commonData: JSON.parse(localStorage.getItem('myCommon')) || [],
  },
  mutations: {
    setAsideData(state, key) {
      const asideActions = {
        'tools': tools,
        'docs': docs,
        'community': community,
      }
      state.asideData = asideActions[key]
    },
    setMainData(state, menuItemText) {
      const actions = new Map([
        ['前端工具', frontEndTools],
        ['办公工具', officeTools],
        ['vue', vue],
        ['react', react],
        ['微信开发', wechat],
        ['跨端框架', across],
        ['编译构建', compiler],
        ['博客', blogs],
      ])
      state.mainData = actions.get(menuItemText)
    },
    setCommonData(state, title) {
      allCards.map(item => {
        item.title === title && addCommon(item)
      })
      state.commonData = JSON.parse(localStorage.getItem('myCommon'))
    },
    delCommonData(state, title) {
      if (title === "all") {
        localStorage.clear()
        state.commonData = []
      } else {
        delCommon(title)
        state.commonData = JSON.parse(localStorage.getItem('myCommon'))
      }
    }
  },
  actions: {},
  modules: {},
})

export default store
