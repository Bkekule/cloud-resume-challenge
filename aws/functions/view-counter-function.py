import boto3 # type: ignore
import os
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

def lambda_handler(event: dict, context) -> dict[str, int | str]:
    page_id = event['pathParameters']['page_id']
    method = event['httpMethod']
    
    if method == 'GET':
        response = table.get_item(Key={'page_id': page_id})
        count = response.get('Item', {}).get('count', 0)
        return {'statusCode': 200, 'body': json.dumps({'count': count})}
    
    elif method == 'POST':
        body = json.loads(event['body'])
        new_count = body['count']
        table.put_item(Item={'page_id': page_id, 'count': new_count})
        return {'statusCode': 200, 'body': json.dumps({'count': new_count})}
    
    return {'statusCode': 405, 'body': json.dumps({'error': 'Method not allowed'})}