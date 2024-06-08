from flask import Flask, redirect, url_for, render_template, request

#JINJA2 template engine
'''
{%...%} conditions, for loops ex: {% if result >= 50 %} Do this {% else %} or do that,
if we need to close we do it mannualy {%  endif %}
table
{% for key, value in result.items() %}
tr 
    th {{ key }} /th
    th {{ value }} /th
/tr
{% endfor %}
/table

{{    }} expression to print output
{#....#} this is for comments
'''

app=Flask(__name__) 

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/result/<int:score>')
def result(score):
    res=""
    if score >= 50:
        res = "PASS"
    else:
        res = "FAIL"
    return render_template('result.html', result=res)

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    total_score = 0
    if request.method == 'POST':
        data_science = float(request.form['datascience'])
        total_score = data_science
    return redirect(url_for("result", score=total_score))


if __name__ == '__main__':
    app.run(debug=True)