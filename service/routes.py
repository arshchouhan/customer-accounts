
from flask import Flask, jsonify, request

app = Flask(__name__)

accounts = []

@app.route("/accounts", methods=["POST"])
def create_account():
    account = request.get_json()
    accounts.append(account)
    return jsonify(account), 201

@app.route("/accounts", methods=["GET"])
def list_accounts():
    return jsonify(accounts), 200

@app.route("/accounts/<int:index>", methods=["GET"])
def read_account(index):
    return jsonify(accounts[index]), 200

@app.route("/accounts/<int:index>", methods=["PUT"])
def update_account(index):
    account = request.get_json()
    accounts[index] = account
    return jsonify(account), 200

@app.route("/accounts/<int:index>", methods=["DELETE"])
def delete_account(index):
    accounts.pop(index)
    return '', 204

if __name__ == "__main__":
    app.run(debug=True)
