const navigation = {

  back: () => {
    history.back();
  },

  forward: () => {
    history.forward();
  },

  navigateTo: (url) => {
    window.location = url;
  }

}

export default navigation
