# from elasticsearch import Elasticsearch
# import json

# es_index = ''
# index_list = json.loads('test.json')

# class ElasticWriter(object):
#     """ Elasticindex wrapper class """
    
#     def _init_(self, host='localhost',port=9200, e_index=es_index):
#         self._index = e_index
#         self.es = Elasticsearch([{'host': host, 'port': port}])

#     def write(self, doc, doc_type='document'):
#         """ Write document to Elastic """

#         print('Indexing',doc)
#         return self.es.index(index=self._index, doc_type='document',body=doc)

from elasticsearch import Elasticsearch
import ast
import json
es = Elasticsearch()

f = open("data0.json")
i = 1
# docket_content = f.read()
# f1.write(docket_content)
# f1.close()
# f.close()
docket_content = f.read()
print(len(json.loads(docket_content)))
# print type(docket_content)
# print eval(docket_content)
# print ast.literal_eval(docket_content)
data_dict = json.loads(docket_content)
#for date, datapoints in data_dict.iteritems():
for point in data_dict:
    print(point)
    es.index(index='trails', ignore=400, doc_type='docket', body=point) 
print("ok")
