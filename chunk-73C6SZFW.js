var o={read(r,t){try{let e=localStorage.getItem(r);return e?JSON.parse(e):t}catch{return t}},write(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}};export{o as a};
