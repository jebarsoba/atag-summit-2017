using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Lambda.Core;
using Summit2017.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Summit2017
{
    public class SessionVote
    {
        private const string ATAGPresentacionesTable = "ATAG17_Presentaciones_4";

        [LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]
        public async Task<List<Document>> GetSessionVotes()
        {
            var client = new AmazonDynamoDBClient();
            var table = Table.LoadTable(client, ATAGPresentacionesTable);
            var search = table.Scan(new ScanFilter());
            var document = await search.GetRemainingAsync();

            return document;
        }

        [LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]
        public async Task<string> UpdateVote(PresentationGroup4 pocoObject)
        {
            var doc = new Document
            {
                { "PresentationId", pocoObject.PresentationID },
                { "Votes", pocoObject.Votes }
            };

            var client = new AmazonDynamoDBClient();
            var table = Table.LoadTable(client, ATAGPresentacionesTable);

            await table.UpdateItemAsync(doc, new System.Threading.CancellationToken());

            return pocoObject.PresentationID;
        }
    }
}