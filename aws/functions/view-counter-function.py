import boto3 # type: ignore
import os
import json
import logging
from decimal import Decimal

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

ALLOWED_ORIGINS = [
    os.environ.get('WEB_PAGE_ORIGIN'),
    os.environ.get('WEB_PAGE_ORIGIN', '').replace('https://', 'https://www.')
]

def lambda_handler(event: dict, context) -> dict[str, int | str]:
    logger.info(f"Received event: {json.dumps(event)}")
    
    page_id = event['pathParameters']['page_id']
    method = event['httpMethod']
    
    logger.info(f"Processing {method} request for page_id: {page_id}")
    
    origin = event.get('headers', {}).get('origin', '')
    
    allowed_origin = origin if origin in ALLOWED_ORIGINS else ALLOWED_ORIGINS[0]
    
    if method == 'OPTIONS':
        return {"statusCode": 200, "headers": {"Access-Control-Allow-Origin": allowed_origin, "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization"}, "body": ""}
    
    if method == 'GET':
        response = table.get_item(Key={'page_id': page_id})
        count = int(response.get('Item', {}).get('count', 0))
        logger.info(f"GET - Returning count: {count} for page_id: {page_id}")
        return {"statusCode": 200, "headers": {"Access-Control-Allow-Origin": allowed_origin, "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization"}, 'body': json.dumps({'count': count})}
    
    elif method == 'POST':
        body = json.loads(event['body'])
        new_count = body['count']
        table.put_item(Item={'page_id': page_id, 'count': new_count})
        logger.info(f"POST - Updated count to: {new_count} for page_id: {page_id}")
        return {"statusCode": 200, "headers": {"Access-Control-Allow-Origin": allowed_origin, "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization"}, 'body': json.dumps({'count': new_count})}
    
    logger.warning(f"Method not allowed: {method}")
    return {"statusCode": 405, "headers": {"Access-Control-Allow-Origin": allowed_origin, "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization"}, 'body': json.dumps({'error': 'Method not allowed'})}