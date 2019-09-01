const teamSummary = [
    {"Team":"GB","Score":"24.5","ExpectedTd":"2.45","Snaps":"64.62","PassEff":"0.9","RushEff":"0.9","RushTdPerc":"0.35","PassTdPerc":"0.65"},
    {"Team":"TEN","Score":"25.5","ExpectedTd":"2.55","Snaps":"61.93","PassEff":"0.9","RushEff":"1.05","RushTdPerc":"0.46","PassTdPerc":"0.54"},
    {"Team":"BAL","Score":"16.25","ExpectedTd":"1.625","Snaps":"64.04","PassEff":"1","RushEff":"1.05","RushTdPerc":"0.45","PassTdPerc":"0.55"},
    {"Team":"ATL","Score":"25.75","ExpectedTd":"2.575","Snaps":"62.07","PassEff":"0.9","RushEff":"0.95","RushTdPerc":"0.19","PassTdPerc":"0.81"},
    {"Team":"BUF","Score":"20.75","ExpectedTd":"2.075","Snaps":"65.13","PassEff":"1","RushEff":"1","RushTdPerc":"0.3","PassTdPerc":"0.7"},
    {"Team":"WAS","Score":"27.75","ExpectedTd":"2.775","Snaps":"59.71","PassEff":"0.95","RushEff":"0.95","RushTdPerc":"0.32","PassTdPerc":"0.68"},
    {"Team":"LAR","Score":"24","ExpectedTd":"2.4","Snaps":"64.94","PassEff":"1.05","RushEff":"1","RushTdPerc":"0.39","PassTdPerc":"0.61"},
    {"Team":"KC","Score":"24.25","ExpectedTd":"2.425","Snaps":"65.39","PassEff":"0.9","RushEff":"0.9","RushTdPerc":"0.22","PassTdPerc":"0.78"},
    {"Team":"IND","Score":"26.25","ExpectedTd":"2.625","Snaps":"63.57","PassEff":"0.95","RushEff":"0.95","RushTdPerc":"0.25","PassTdPerc":"0.75"},
    {"Team":"CIN","Score":"26.5","ExpectedTd":"2.65","Snaps":"61.77","PassEff":"0.95","RushEff":"1","RushTdPerc":"0.29","PassTdPerc":"0.71"},
    {"Team":"NYG","Score":"26.25","ExpectedTd":"2.625","Snaps":"61.76","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.34","PassTdPerc":"0.66"},
    {"Team":"DET","Score":"22.5","ExpectedTd":"2.25","Snaps":"62.65","PassEff":"0.95","RushEff":"1.05","RushTdPerc":"0.37","PassTdPerc":"0.63"},
    {"Team":"SF","Score":"25","ExpectedTd":"2.5","Snaps":"60.28","PassEff":"1.1","RushEff":"1.1","RushTdPerc":"0.19","PassTdPerc":"0.81"},
    {"Team":"PIT","Score":"28.75","ExpectedTd":"2.875","Snaps":"63.16","PassEff":"0.95","RushEff":"1","RushTdPerc":"0.28","PassTdPerc":"0.72"},
    {"Team":"HOU","Score":"30.25","ExpectedTd":"3.025","Snaps":"60.85","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.2","PassTdPerc":"0.8"},
    {"Team":"DEN","Score":"22.5","ExpectedTd":"2.25","Snaps":"64.77","PassEff":"1.1","RushEff":"1","RushTdPerc":"0.5","PassTdPerc":"0.5"},
    {"Team":"CHI","Score":"21.5","ExpectedTd":"2.15","Snaps":"63.17","PassEff":"1.1","RushEff":"1","RushTdPerc":"0.33","PassTdPerc":"0.68"},
    {"Team":"CLE","Score":"20","ExpectedTd":"2","Snaps":"65.98","PassEff":"1","RushEff":"0.95","RushTdPerc":"0.24","PassTdPerc":"0.76"},
    {"Team":"MIA","Score":"21.25","ExpectedTd":"2.125","Snaps":"65.67","PassEff":"0.9","RushEff":"0.9","RushTdPerc":"0.22","PassTdPerc":"0.78"},
    {"Team":"MIN","Score":"21.75","ExpectedTd":"2.175","Snaps":"61.99","PassEff":"1.1","RushEff":"1.1","RushTdPerc":"0.21","PassTdPerc":"0.79"},
    {"Team":"NYJ","Score":"17.75","ExpectedTd":"1.775","Snaps":"57.96","PassEff":"0.9","RushEff":"0.95","RushTdPerc":"0.38","PassTdPerc":"0.62"},
    {"Team":"PHI","Score":"18.75","ExpectedTd":"1.875","Snaps":"64.69","PassEff":"0.95","RushEff":"1.1","RushTdPerc":"0.27","PassTdPerc":"0.73"},
    {"Team":"CAR","Score":"27","ExpectedTd":"2.7","Snaps":"61.66","PassEff":"0.95","RushEff":"1.1","RushTdPerc":"0.31","PassTdPerc":"0.69"},
    {"Team":"JAC","Score":"28.25","ExpectedTd":"2.825","Snaps":"65.43","PassEff":"0.95","RushEff":"1.1","RushTdPerc":"0.42","PassTdPerc":"0.58"},
    {"Team":"LAC","Score":"19.25","ExpectedTd":"1.925","Snaps":"59.95","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.33","PassTdPerc":"0.67"},
    {"Team":"SEA","Score":"17","ExpectedTd":"1.7","Snaps":"63.74","PassEff":"1.05","RushEff":"1.05","RushTdPerc":"0.31","PassTdPerc":"0.69"},
    {"Team":"DAL","Score":"19.25","ExpectedTd":"1.925","Snaps":"64.21","PassEff":"1.05","RushEff":"1","RushTdPerc":"0.23","PassTdPerc":"0.77"},
    {"Team":"ARI","Score":"25","ExpectedTd":"2.5","Snaps":"62.05","PassEff":"1.1","RushEff":"0.95","RushTdPerc":"0.38","PassTdPerc":"0.63"},
    {"Team":"TB","Score":"24","ExpectedTd":"2.4","Snaps":"64.24","PassEff":"1.1","RushEff":"0.95","RushTdPerc":"0.18","PassTdPerc":"0.82"},
    {"Team":"NE","Score":"22.75","ExpectedTd":"2.275","Snaps":"65.53","PassEff":"1","RushEff":"0.95","RushTdPerc":"0.35","PassTdPerc":"0.65"},
    {"Team":"NO","Score":"23.25","ExpectedTd":"2.325","Snaps":"64","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.37","PassTdPerc":"0.63"},
    {"Team":"OAK","Score":"21","ExpectedTd":"2.1","Snaps":"63.8","PassEff":"0.9","RushEff":"1","RushTdPerc":"0.31","PassTdPerc":"0.69"}
    ]

    export default teamSummary