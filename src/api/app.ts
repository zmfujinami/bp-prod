/**
 * URL文字列を配列で渡し、SSLなURLのみを返す
 */
class UrlObject {

  private urlArr: string[] = []
  public nullables: string

  constructor(urls: string[]) {
    this.urlArr = urls
  }

  getOnlySsl (): string[] {
    return this.urlArr.filter((value: string) => {
      return value.match(/^https/) !== null;
    })
  }
}

const urls: string[] = ['https://www.google.co.jp/', 'http://www.apple.com/', 'https://www.amazon.co.jp/']
const urlObjects: UrlObject = new UrlObject(urls)
const sslUrls: string[] = urlObjects.getOnlySsl()
console.log(sslUrls)

// strictについて
// urlObjects.nullables = null
// urlObjects.nullables = undefined