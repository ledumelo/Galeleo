import os
import json
from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
from datetime import datetime
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "galeleo-default-secret-key-2024")

# Load multilingual content
def load_content():
    try:
        with open('static/data/content.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        logging.error("Content file not found")
        return {"pt": {}, "en": {}, "es": {}}

@app.route('/')
def index():
    lang = request.args.get('lang', 'pt')
    if lang not in ['pt', 'en', 'es']:
        lang = 'pt'
    
    content = load_content()
    return render_template('index.html', content=content.get(lang, {}), lang=lang)

@app.route('/blog')
def blog():
    lang = request.args.get('lang', 'pt')
    if lang not in ['pt', 'en', 'es']:
        lang = 'pt'
    
    content = load_content()
    return render_template('blog.html', content=content.get(lang, {}), lang=lang)

@app.route('/case/<case_name>')
def case_study(case_name):
    lang = request.args.get('lang', 'pt')
    if lang not in ['pt', 'en', 'es']:
        lang = 'pt'
    
    valid_cases = ['veredas', 'veras', 'hydroapp']
    if case_name not in valid_cases:
        return redirect(url_for('blog', lang=lang))
    
    content = load_content()
    template_name = f'case_{case_name}.html'
    return render_template(template_name, content=content.get(lang, {}), lang=lang, case=case_name)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    lang = request.args.get('lang', 'pt')
    if lang not in ['pt', 'en', 'es']:
        lang = 'pt'
    
    content = load_content()
    
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        subject = request.form.get('subject', '').strip()
        message = request.form.get('message', '').strip()
        
        # Basic validation
        if not all([name, email, subject, message]):
            flash(content.get(lang, {}).get('contact', {}).get('error_required', 'Todos os campos são obrigatórios.'), 'error')
        elif '@' not in email or '.' not in email:
            flash(content.get(lang, {}).get('contact', {}).get('error_email', 'Email inválido.'), 'error')
        else:
            # Log the contact form submission (in production, you'd send an email or save to database)
            logging.info(f"Contact form submission - Name: {name}, Email: {email}, Subject: {subject}")
            flash(content.get(lang, {}).get('contact', {}).get('success', 'Mensagem enviada com sucesso!'), 'success')
            return redirect(url_for('contact', lang=lang))
    
    return render_template('contact.html', content=content.get(lang, {}), lang=lang)

@app.route('/api/language/<lang>')
def set_language(lang):
    if lang in ['pt', 'en', 'es']:
        session['language'] = lang
        return jsonify({'status': 'success', 'language': lang})
    return jsonify({'status': 'error', 'message': 'Invalid language'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
