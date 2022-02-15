#http://www.i18nguy.com/unicode/hebrew.html
a<-("\U05D1\U05BC")
cat(a)
a<-("\U05D1\U05B9")
cat(a)

letterij<-paste0("\\U",as.hexmode(1493),
                 "\\U",as.hexmode(1468))
cat(eval(parse(text=paste0("'", letterij, "'"))))
letterij

alephbet<-c(1488:1514)
alephbet<-alephbet[!alephbet %in% c(1498,1501,1503,1507,1509)]
nikuds<-c(1463,1464,1462,1460,1461,1456,1465,1467,1468)
names(nikuds)<-c("Patach","Qamats","Segol","Hiriq","Tsere","Sheva",
                 "Holam ","Qubuts","Shuruq")

for (i in alephbet) {
    for (j in nikuds) {
    letterij<-paste0("\\U",as.hexmode(i),
                     "\\U",as.hexmode(j))
    x<-eval(parse(text=paste0("'", letterij, "'")))
    cat(x)
    
    png("letters/out.png", width=1000, height=1000)
    par(mar=c(0,0,0,0), xpd=NA, mgp=c(0,0,0), oma=c(0,0,0,0), ann=F)
    plot.new()
    plot.window(0:1, 0:1)
    
    #add text
    text(.5,.5, x, cex=100)
    
    #close image
    dev.off()
    i_number<-grep(i,alephbet)
    j_number<-grep(j,nikuds)
    ij_num<-22*(j_number-1)+i_number
    file.rename(from='letters/out.png', to=paste0("letters/",ij_num,".png"))
    }
}