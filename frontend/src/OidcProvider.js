onUserLoaded = (user) => {
    this.props.store.dispatch(userFound(JSON.parse(user.toStorageString())));
  };