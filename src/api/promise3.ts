class PromisePractice3 {

  sleep(waitSec, callbackFunc) {
    let spanedSec = 0;
    let id = setInterval(function () {
      spanedSec++;
      if (spanedSec >= waitSec) {
        clearInterval(id);
        if (callbackFunc) callbackFunc();
      }
    }, 1);
  }

  /**
   * promise生成
   * @param {number} index 何番目の処理か
   * @param {number} wait 処理に何msかかるか
   * @returns {Promise<string>}
   */
  async getPromise(index: number, wait: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.sleep(wait, () => {
        console.log(String(index) + '番目の処理完了')
        resolve(String(index))
      })
    })
  }

  /**
   * asyncメソッド
   */
  async asyncMethod(): Promise<void> {
    // awaitを外したり、処理時間をいじる
    await this.getPromise(1, 100)
    await this.getPromise(2, 1000)
    await this.getPromise(3, 400)
  }
}
new PromisePractice3().asyncMethod()