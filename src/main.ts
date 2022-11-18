import {GsClipboard} from 'gs-clipboard'
import dayjs from 'dayjs'

const GS = new GsClipboard({
  handlers: [],
});

const btn = document.querySelector('#copy') as HTMLButtonElement
const inputRef = document.querySelector('#inputAreaRef') as HTMLTextAreaElement
btn.addEventListener('click',()=>{
  const copyData:any = []
  const data = inputRef.value
  data.trim().split('\n').map((text)=>{
    const timestamp = text.trim()
    if(timestamp.length === 10 && !!~timestamp.indexOf('166')){
      const formattedDate = dayjs.unix(Number(timestamp)).format("YYYY-MM-DD HH:mm:ss")
      copyData.push([formattedDate])
    }else{
      copyData.push([timestamp])
    }
  })
  console.log(copyData)
  GS.setCopy(copyData);
})
