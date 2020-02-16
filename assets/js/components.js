var colors = {
  'red-light': 'bg-red-300 border border-red-200',
  'red-dark': 'bg-red-400 border border-red-500',
  'red-dark-new': 'bg-red-300 border border-red-500',
  'green-light': 'bg-green-200 border border-green-100',
  'green-dark': 'bg-green-300 border border-green-400',
  'green-dark-new': 'bg-green-200 border border-green-400',
  'yellow-light': 'bg-yellow-300 border border-yellow-200',
  'yellow-dark': 'bg-yellow-400 border border-yellow-500',
  'yellow-dark-new': 'bg-yellow-300 border border-yellow-500',
  'blue-light': 'bg-blue-200 border border-blue-100',
  'blue-dark': 'bg-blue-300 border border-blue-400',
  'orange-light': 'bg-orange-300 border border-orange-200',
  'orange-dark': 'bg-orange-400 border border-orange-500',
  'purple-light': 'bg-purple-200 border border-purple-100',
  'purple-dark': 'bg-purple-300 border border-purple-400',
  'pink-light': 'bg-pink-200 border border-pink-100',
  'pink-dark': 'bg-pink-300 border border-pink-400',
  'indigo-light': 'bg-indigo-100 border border-white',
  'indigo-dark': 'bg-indigo-200 border border-indigo-300',
  'teal-light': 'bg-teal-200 border border-teal-100',
  'teal-dark': 'bg-teal-300 border border-teal-400',
  'teal-dark-new': 'bg-teal-200 border border-teal-400',
  'grey-light': 'bg-gray-300 border border-gray-200',
  'grey-dark': 'bg-gray-400 border border-gray-500'
};

var text_colors = {
  'red-light': 'text-red-600',
  'red-dark': 'text-red-200',
  'green-light': 'text-green-400',
  'green-dark': 'text-green-100',
  'yellow-light': 'text-yellow-500',
  'yellow-dark': 'text-white',
  'blue-light': 'text-blue-500',
  'blue-dark': 'text-blue-100',
  'orange-light': 'text-orange-500',
  'orange-dark': 'text-orange-100',
  'purple-light': 'text-purple-500',
  'purple-dark': 'text-purple-100',
  'pink-light': 'text-pink-500',
  'pink-dark': 'text-pink-100',
  'indigo-light': 'text-indigo-500',
  'indigo-dark': 'text-indigo-100',
  'teal-light': 'text-teal-500',
  'teal-dark': 'text-teal-100',
  'grey-light': 'text-gray-500',
  'grey-dark': 'text-gray-100'
}

Vue.component('ctext', {
  props: ['text', 'color'],
  computed: {
    colorClasses() {
      return colors[this.color]
    }
  },
  template: '<span class="px-1" :class="colorClasses">{{ text }}</span>'
})

Vue.component('bar', {
  props: ['name', 'icon', 'color', 'classes'],
  computed: {
    colorClasses() {
      return colors[this.color]
    }
  },
  template: '<div class="" :class="[classes, colorClasses]">{{ name }}<i class="fas" :class="icon"></i></div>'
})

Vue.component('bar-icon', {
  props: ['name', 'icon', 'color', 'classes'],
  computed: {
    colorClasses() {
      return colors[this.color] + " " + text_colors[this.color]
    }
  },
  template: '<div class="" :class="[classes, colorClasses]">{{ name }}<i class="fas" :class="icon"></i></div>'
})

Vue.component('assets', {
  props: ['assets', 'classes'],
  template: '<div class="inline-flex container text-sm text-center" :class="classes"><bar v-for="asset in assets" v-bind:name="asset.name" v-bind:icon="asset.icon" v-bind:color="asset.color" v-bind:classes="asset.class"></bar></div>'
})

Vue.component('assets-icons', {
  props: ['assets', 'classes'],
  template: '<div class="inline-flex text-sm text-center h-5" :class="classes"><bar-icon v-for="asset in assets" v-bind:name="asset.name" v-bind:icon="asset.icon" v-bind:color="asset.color" v-bind:classes="asset.class"></bar-icon></div>'
})

Vue.component('assets-liabilities', {
  props: ['assets', 'liabilities', 'classes'],
  template: '<div :class="classes"><div class="container flex"><assets v-bind:assets="assets" class="mt-1"></assets></div><div class="container flex"><assets v-bind:assets="liabilities" classes="mt-1"></assets></div></div>'
})

Vue.component('assets-income', {
  props: ['assets', 'income', 'classes'],
  template: '<div :class="classes"><div class="container flex"><assets v-bind:assets="assets" class="text-lg h-10"></assets></div><div class="container flex"><assets v-bind:assets="income" classes="h-6 mt-2"></assets></div></div>'
})

Vue.component('arrow-rightdown', {
  template: '<div class="text-center md:p-5 mt-1 md:mt-0"><i class="fas fa-angle-down md:hidden"></i><i class="fas fa-angle-right hidden md:flex"></i></div>'
})

Vue.component('al-change', {
  props: ['ab', 'aa', 'lb', 'la', 'classes'],
  template: '<div class="my-1 md:inline-flex" :class="classes"><assets-liabilities v-bind:assets="ab" v-bind:liabilities="lb"></assets-liabilities><arrow-rightdown></arrow-rightdown><assets-liabilities v-bind:assets="aa" v-bind:liabilities="la"></assets-liabilities></div>'
})

Vue.component('ai-change', {
  props: ['ab', 'aa', 'ib', 'ia', 'classes'],
  template: '<div class="my-1 md:inline-flex" :class="classes"><assets-income v-bind:assets="ab" v-bind:income="ib"></assets-income><arrow-rightdown></arrow-rightdown><assets-income v-bind:assets="aa" v-bind:income="ia"></assets-income></div>'
})

Vue.component('arrow', {
  template: '<span class="text-sm mx-1"><i class="fas fa-long-arrow-alt-right"></i></span>'
})

Vue.component('arrow-b', {
  template: '<span class="text-sm mx-1"><i class="fas fa-long-arrow-alt-left"></i></span>'
})

Vue.component('cycle', {
  template: '<span class="text-sm ml-1"><i class="fas fa-redo"></i></span>'
})

Vue.component('currency-plus', {
  data: function () {
    return {
      icons: [{ icon: "fa-plus", color: "green-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('currency-minus', {
  data: function () {
    return {
      icons: [{ icon: "fa-minus", color: "green-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('depo-plus', {
  data: function () {
    return {
      icons: [{ icon: "fa-plus", color: "teal-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('depo-minus', {
  data: function () {
    return {
      icons: [{ icon: "fa-minus", color: "teal-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('money-plus', {
  data: function () {
    return {
      icons: [{ icon: "fa fa-plus", color: "purple-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('money-minus', {
  data: function () {
    return {
      icons: [{ icon: "fa-minus", color: "purple-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('equity-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "yellow-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('equity-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "yellow-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('equity-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "yellow-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('savings-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "orange-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('savings-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "orange-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('debt-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "red-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('debt-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "red-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('debt-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "red-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('debt-plus', {
  data: function () {
    return {
      icons: [{ icon: "fa-plus", color: "red-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('debt-minus', {
  data: function () {
    return {
      icons: [{ icon: "fa-minus", color: "red-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('cinterest-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "green-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('cinterest-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "green-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('cinterest-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "green-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('dinterest-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "purple-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('dinterest-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "purple-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('dinterest-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "purple-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('wages-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "blue-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('wages-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "blue-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('wages-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "blue-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('dividends-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "yellow-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('dividends-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "yellow-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('dividends-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "yellow-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('interest-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "red-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('interest-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "red-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('interest-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "red-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('income-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "grey-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('income-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "grey-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('income-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "grey-light", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})


Vue.component('gni-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "grey-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('gni-flat', {
  data: function () {
    return {
      icons: [{ name: "-", color: "grey-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('gni-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "grey-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('ca-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "pink-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('ca-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "pink-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('mult-up', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-up", color: "blue-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('mult-down', {
  data: function () {
    return {
      icons: [{ icon: "fa-sort-down", color: "blue-dark", class: "w-4" }]
    }
  },
  template: '<assets-icons v-bind:assets="icons"></assets-icons>'
})

Vue.component('mult', {
  template: '<span class="text-blue"><i class="fas fa-times-circle"></i></span>'
})

Vue.component('sm', {
  template: '<span class="text-blue"><i class="fas fa-times"></i></span>'
})