function abbrevName(name){
    // code away
    var initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '').concat(".") + (initials.pop() || '')).toUpperCase();
return initials
}
