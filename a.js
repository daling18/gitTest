var a = 0
function add() {
    a++
}
setTimeout(() => {
    console.log(ex.a)
}, 2000)
const ex = {
    a,
    add
  }
// export default ex
module.exports = ex