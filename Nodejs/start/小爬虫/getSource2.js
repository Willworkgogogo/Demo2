var http = require("http"),
    cheerio = require("cheerio"),
    url = "http://www.imooc.com/learn/348"


http.get(url, (res) => {
    var html = ""

    res.on('data', (data) => {
        html += data
    })

    res.on('end', () => {
        var course = filterChapters(html)
        printCourseInfo(course)
    })
}).on('error', () => {
    console.log("获取信息失败！")
})

function filterChapters(html) {
    var $ = cheerio.load(html)
    var chapters = $('.chapter')
    /**
     * [
     *  {
     *      chapterTitle: 
     *      videos:[
     *              {
     *                  title:
     *                  id:
     *              }
     *          ]
     * }
     * ]
     * */ 
     var courseData = []
     chapters.each((item) => {
         var chapter = $(this)
         var chapterTitle = chapter.find('strong').text()
         var videos = chapter.find('ul').children('li')
         chapterData = {
             chapterTitle: chapterTitle,
             videos: []
         }
         videos.each((item) => {
             var videoA = $(this).find('.J-media-item').text()
             var videoId = videoA.attr('href').split('video/')[1],
                 videoTitle = videoA.text();
            chapterData.videos.push({
                title: videoTitle,
                id: videoId
            })
         })
         courseData.push(chapterData)
     })
     return courseData
}


function printCourseInfo(course) {
    course.forEach((item) => {
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle + '\n')
        item.videos.forEach((item) => {
            console.log(' 【' + item.id +  '】  ' +  item.title)
        })
    })
}