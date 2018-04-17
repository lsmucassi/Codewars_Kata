class SmallestIntegerFinder {
  findSmallestInt(args) {
    var i = 0, sm = args[i]
    i++
    for (i; i < args.length; i++) {
        (args[i] < sm) ? sm = args[i] : sm += 0
    }
    return sm
  }
}
