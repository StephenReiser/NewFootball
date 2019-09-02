const teamSummary = [
    {"Team":"GB","Score":"24.5","ExpectedTd":"2.45","Snaps":"64.62","PassEff":"0.9","RushEff":"0.9","RushTdPerc":"0.35","PassTdPerc":"0.65","PassPlays":"37.82","RushPlays":"23.88","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"TEN","Score":"25.5","ExpectedTd":"2.55","Snaps":"61.93","PassEff":"0.9","RushEff":"1.05","RushTdPerc":"0.46","PassTdPerc":"0.54","PassPlays":"37.42","RushPlays":"25.69","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"BAL","Score":"16.25","ExpectedTd":"1.625","Snaps":"64.04","PassEff":"1","RushEff":"1.05","RushTdPerc":"0.45","PassTdPerc":"0.55","PassPlays":"36.37","RushPlays":"29.42","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"ATL","Score":"25.75","ExpectedTd":"2.575","Snaps":"62.07","PassEff":"0.9","RushEff":"0.95","RushTdPerc":"0.19","PassTdPerc":"0.81","PassPlays":"41.41","RushPlays":"24.48","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"BUF","Score":"20.75","ExpectedTd":"2.075","Snaps":"65.13","PassEff":"1","RushEff":"1","RushTdPerc":"0.3","PassTdPerc":"0.7","PassPlays":"41.05","RushPlays":"28.65","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"WAS","Score":"27.75","ExpectedTd":"2.775","Snaps":"59.71","PassEff":"0.95","RushEff":"0.95","RushTdPerc":"0.32","PassTdPerc":"0.68","PassPlays":"36.31","RushPlays":"25.12","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"LAR","Score":"24","ExpectedTd":"2.4","Snaps":"64.94","PassEff":"1.05","RushEff":"1","RushTdPerc":"0.39","PassTdPerc":"0.61","PassPlays":"38.61","RushPlays":"25.53","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"KC","Score":"24.25","ExpectedTd":"2.425","Snaps":"65.39","PassEff":"0.9","RushEff":"0.9","RushTdPerc":"0.22","PassTdPerc":"0.78","PassPlays":"39.97","RushPlays":"24.26","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"IND","Score":"26.25","ExpectedTd":"2.625","Snaps":"63.57","PassEff":"0.95","RushEff":"0.95","RushTdPerc":"0.25","PassTdPerc":"0.75","PassPlays":"41.83","RushPlays":"24.14","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"CIN","Score":"26.5","ExpectedTd":"2.65","Snaps":"61.77","PassEff":"0.95","RushEff":"1","RushTdPerc":"0.29","PassTdPerc":"0.71","PassPlays":"39","RushPlays":"24.44","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"NYG","Score":"26.25","ExpectedTd":"2.625","Snaps":"61.76","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.34","PassTdPerc":"0.66","PassPlays":"38.51","RushPlays":"23.91","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"DET","Score":"22.5","ExpectedTd":"2.25","Snaps":"62.65","PassEff":"0.95","RushEff":"1.05","RushTdPerc":"0.37","PassTdPerc":"0.63","PassPlays":"40.36","RushPlays":"23.99","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"SF","Score":"25","ExpectedTd":"2.5","Snaps":"60.28","PassEff":"1.1","RushEff":"1.1","RushTdPerc":"0.19","PassTdPerc":"0.81","PassPlays":"35.94","RushPlays":"25.39","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"PIT","Score":"28.75","ExpectedTd":"2.875","Snaps":"63.16","PassEff":"0.95","RushEff":"1","RushTdPerc":"0.28","PassTdPerc":"0.72","PassPlays":"42.97","RushPlays":"21.76","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"HOU","Score":"30.25","ExpectedTd":"3.025","Snaps":"60.85","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.2","PassTdPerc":"0.8","PassPlays":"37.38","RushPlays":"22.12","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"DEN","Score":"22.5","ExpectedTd":"2.25","Snaps":"64.77","PassEff":"1.1","RushEff":"1","RushTdPerc":"0.5","PassTdPerc":"0.5","PassPlays":"37.33","RushPlays":"23.67","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"CHI","Score":"21.5","ExpectedTd":"2.15","Snaps":"63.17","PassEff":"1.1","RushEff":"1","RushTdPerc":"0.33","PassTdPerc":"0.68","PassPlays":"37.96","RushPlays":"25.28","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"CLE","Score":"20","ExpectedTd":"2","Snaps":"65.98","PassEff":"1","RushEff":"0.95","RushTdPerc":"0.24","PassTdPerc":"0.76","PassPlays":"40.47","RushPlays":"25.56","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"MIA","Score":"21.25","ExpectedTd":"2.125","Snaps":"65.67","PassEff":"0.9","RushEff":"0.9","RushTdPerc":"0.22","PassTdPerc":"0.78","PassPlays":"36.16","RushPlays":"24.26","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"MIN","Score":"21.75","ExpectedTd":"2.175","Snaps":"61.99","PassEff":"1.1","RushEff":"1.1","RushTdPerc":"0.21","PassTdPerc":"0.79","PassPlays":"36.8","RushPlays":"24.56","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"NYJ","Score":"17.75","ExpectedTd":"1.775","Snaps":"57.96","PassEff":"0.9","RushEff":"0.95","RushTdPerc":"0.38","PassTdPerc":"0.62","PassPlays":"35.54","RushPlays":"26.72","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"PHI","Score":"18.75","ExpectedTd":"1.875","Snaps":"64.69","PassEff":"0.95","RushEff":"1.1","RushTdPerc":"0.27","PassTdPerc":"0.73","PassPlays":"39.78","RushPlays":"23.91","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"CAR","Score":"27","ExpectedTd":"2.7","Snaps":"61.66","PassEff":"0.95","RushEff":"1.1","RushTdPerc":"0.31","PassTdPerc":"0.69","PassPlays":"38.56","RushPlays":"23.04","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"JAC","Score":"28.25","ExpectedTd":"2.825","Snaps":"65.43","PassEff":"0.95","RushEff":"1.1","RushTdPerc":"0.42","PassTdPerc":"0.58","PassPlays":"39.74","RushPlays":"22.68","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"LAC","Score":"19.25","ExpectedTd":"1.925","Snaps":"59.95","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.33","PassTdPerc":"0.67","PassPlays":"36.36","RushPlays":"24.82","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"SEA","Score":"17","ExpectedTd":"1.7","Snaps":"63.74","PassEff":"1.05","RushEff":"1.05","RushTdPerc":"0.31","PassTdPerc":"0.69","PassPlays":"32.08","RushPlays":"30.45","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"DAL","Score":"19.25","ExpectedTd":"1.925","Snaps":"64.21","PassEff":"1.05","RushEff":"1","RushTdPerc":"0.23","PassTdPerc":"0.77","PassPlays":"38.33","RushPlays":"27.06","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"ARI","Score":"25","ExpectedTd":"2.5","Snaps":"62.05","PassEff":"1.1","RushEff":"0.95","RushTdPerc":"0.38","PassTdPerc":"0.63","PassPlays":"37.51","RushPlays":"24.93","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"TB","Score":"24","ExpectedTd":"2.4","Snaps":"64.24","PassEff":"1.1","RushEff":"0.95","RushTdPerc":"0.18","PassTdPerc":"0.82","PassPlays":"38.75","RushPlays":"26.27","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"NE","Score":"22.75","ExpectedTd":"2.275","Snaps":"65.53","PassEff":"1","RushEff":"0.95","RushTdPerc":"0.35","PassTdPerc":"0.65","PassPlays":"39.91","RushPlays":"26.49","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"NO","Score":"23.25","ExpectedTd":"2.325","Snaps":"64","PassEff":"1","RushEff":"0.9","RushTdPerc":"0.37","PassTdPerc":"0.63","PassPlays":"34.1","RushPlays":"26.58","TotalTeamPassPlays":"","TotalTeamRushPlays":""},
    {"Team":"OAK","Score":"21","ExpectedTd":"2.1","Snaps":"63.8","PassEff":"0.9","RushEff":"1","RushTdPerc":"0.31","PassTdPerc":"0.69","PassPlays":"40.37","RushPlays":"25.66","TotalTeamPassPlays":"","TotalTeamRushPlays":""}
    ]
    

    export default teamSummary