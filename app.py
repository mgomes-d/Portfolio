from flask import Flask, redirect, url_for

app=Flask(__name__)

@app.route('/')
def welcome():
    return 'This is my portfolio'

@app.route('/success/<int:score>')
def success(score):
    return "GG"

@app.route('/fail/<int:score>')
def fail(score):
    return "RIP"

@app.route('/result/<int:mark>')
def result(mark):
    result = ""
    if mark < 50:
        result = "fail"
    else:
        result = "success"
    return redirect(url_for(result, score=mark))

if __name__ == '__main__':
    app.run(debug=True)