import boto3 # type: ignore
import os
import json
import logging
from decimal import Decimal

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])

CORS_HEADERS = {
    "Access-Control-Allow-Origin": os.environ['WEB_PAGE_ORIGIN'],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

def lambda_handler(event: dict, context) -> dict[str, int | str]:
    logger.info(f"Received event: {json.dumps(event)}")
    
    page_id = event['pathParameters']['page_id']
    method = event['httpMethod']
    
    logger.info(f"Processing {method} request for page_id: {page_id}")
    
    if method == 'OPTIONS':
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}
    
    if method == 'GET':
        response = table.get_item(Key={'page_id': page_id})
        count = int(response.get('Item', {}).get('count', 0))
        logger.info(f"GET - Returning count: {count} for page_id: {page_id}")
        return {"statusCode": 200, "headers": CORS_HEADERS, 'body': json.dumps({'count': count})}
    
    elif method == 'POST':
        body = json.loads(event['body'])
        new_count = body['count']
        table.put_item(Item={'page_id': page_id, 'count': new_count})
        logger.info(f"POST - Updated count to: {new_count} for page_id: {page_id}")
        return {"statusCode": 200, "headers": CORS_HEADERS, 'body': json.dumps({'count': new_count})}
    
    logger.warning(f"Method not allowed: {method}")
    return {"statusCode": 405, "headers": CORS_HEADERS, 'body': json.dumps({'error': 'Method not allowed'})}